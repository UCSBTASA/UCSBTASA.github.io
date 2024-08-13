"use client";
import { useEffect, useState } from "react";
import test from "node:test";
import css from "styled-jsx/css";
import dynamic from 'next/dynamic'
import { OrganizationChart } from 'primereact/organizationchart';
import {assembleTree, getFamNames} from './parse';

const NoSSRFamilyTrees = () => {
  const famNames = getFamNames();
  const testTrees = [];
  for (const famName of famNames) {
    const miniTrees = assembleTree(famName);
    const treeRow = [];
    
    for (const miniTree of miniTrees) {
      treeRow.push([miniTree]);
    }
    
    testTrees.push(treeRow);
  }

  const nodeTemplate = (node: any) => {
    return (
      <div className="flex flex-col items-center p-2">
          {/* <img alt={node.data.name} src={node.data.image} className="mb-3 w-12 h-12" /> */}
          <p className="text-[0.7rem] font-bold">{node.data.name}</p>
          <p className="text-[0.7rem]">{node.data.title}</p>
      </div>
    );
  };

  const styleObj = {
    "table": () => ({
      className: `mx-0`,
    }),
    "node": () => ({
      className: `px-0 w-12`,
    }),
    "nodecell": {
      className: 'px-0',
    },
    "line-right": (context: any) => ({
      className: `text-center align-top py-0 px-0 rounded-none
                  ${context.lineTop ? 'border-t' : ''}
                  dark:border-blue-900/40`,
    }),
    "line-left": (context: any) => ({
      className: `text-center align-top py-0 px-0 rounded-none border-r
                  ${context.lineTop ? 'border-t' : ''}
                  dark:border-blue-900/40`,
    }),
    "line-down": {
      className: 'border-r dark:border-blue-900/40',
    },
  }

  return (
    <>
    <div className = "w-full h-full bg-green-100 flex flex-col flex-wrap">
      {testTrees.map((treeRow, index) => {
        return (
          <>
            <div className = "flex flex-row items-start">
              {treeRow.map((tree, index) => {
                return (
                  <OrganizationChart value={tree} nodeTemplate={nodeTemplate} pt = {styleObj}/>
                )
              })}
            </div>
            <div key={index} className = "w-full h-10 bg-red-100"/>
          </>
        )
      })}
      {/* <OrganizationChart value={testTree} nodeTemplate={nodeTemplate} /> */}
    </div>
    </>
  );
};

const FamilyTrees = dynamic(() => Promise.resolve(NoSSRFamilyTrees), {
  ssr: false,
});

export default FamilyTrees;
