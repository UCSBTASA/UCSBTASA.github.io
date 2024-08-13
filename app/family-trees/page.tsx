"use client";
import dynamic from 'next/dynamic'
import { OrganizationChart } from 'primereact/organizationchart';
import {assembleTree, getFamNames, recapitalizeAndParseName, yearToRGB} from './parse';
import styleObj from "./style_obj";

const NoSSRFamilyTrees = () => {
  const famNames = getFamNames();
  const testTrees = [];

  // Assemble the tree for each family, and store them in a 2D array
  for (const famName of famNames) {
    const miniTrees = assembleTree(famName);
    const treeRow = [];
    
    for (const miniTree of miniTrees) {
      treeRow.push([miniTree]);
    }
    
    testTrees.push(treeRow);
  }

  // Node template for the organization chart
  const nodeTemplate = (node: any) => {
    const [firstName, lastName] = recapitalizeAndParseName(node.data.name).split(" ");
    const color = yearToRGB(node.data.year);
    return (
      <div className= {`flex flex-col items-center p-2 ${color} rounded-xl`}>
          <p className="text-[0.7rem] font-bold">{firstName}</p>
          <p className="text-[0.7rem] font-bold">{lastName}</p>
          <p className="text-[0.7rem]">{node.data.year != "None" ? node.data.year : null}</p>
      </div>
    );
  };

  return (
    <>
    <div className = "flex flex-col flex-wrap items-center align-self bg-gray-100">
      
      {testTrees.map((treeRow, index) => {
        return (
          <div className = "bg-gray-200 flex-auto m-6 p-6 rounded-3xl drop-shadow-lg">
            <h2 className="text-4xl mb-6 font-semibold text-center"> {recapitalizeAndParseName(famNames[index])} </h2>
            <div className = "flex flex-row justify-center flex-wrap my-4 ">
              {treeRow.map((tree, index) => {
                return (
                  <OrganizationChart value={tree} nodeTemplate={nodeTemplate} pt = {styleObj}/>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
    </>
  );
};

const FamilyTrees = dynamic(() => Promise.resolve(NoSSRFamilyTrees), {
  ssr: false,
});

export default FamilyTrees;
