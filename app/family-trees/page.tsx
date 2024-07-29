"use client";
import { useState } from "react";
import { OrganizationChart } from 'primereact/organizationchart';
import test from "node:test";



const generateTree = (depth) => {
  if (depth === 0) {
    return { label: "foo" };
  }
  return {
    label: "foo",
    expanded: true,
    children: [
      generateTree(depth - 1),
      generateTree(depth - 1),
      generateTree(depth - 1),
    ],
  };
}



const FamilyTrees = () => {
  let testTree = [generateTree(3)];
  console.log(testTree);

  const [data] = useState([
    {
      label: 'Argentina',
      expanded: true,
      children: [
        {
          label: 'Argentina',
          expanded: true,
          children: [
            {
              label: 'Argentina'
            },
            {
              label: 'Croatia'
            }
          ]
        },
        {
          label: 'France',
          expanded: true,
          children: [
            {
              label: 'France'
            },
            {
              label: 'Morocco'
            }
          ]
        }
      ]
    }
  ]);

  const nodeTemplate = (node) => {
    return (
        <div className="flex flex-column align-items-center">
            <img alt={node.label} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`w-2rem shadow-2 flag flag-${node.data}`} />
            <div className="mt-3 font-medium text-lg bg-red-100 h-full w-full">{node.label}</div>
        </div>
    );
  };

  return (
    <div className = "w-full bg-green-100 flex flex-wrap">
      <OrganizationChart value={testTree} nodeTemplate={nodeTemplate}/>
    </div>
  );
};

export default FamilyTrees;
