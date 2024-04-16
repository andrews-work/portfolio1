// CodeM.tsx

import React from 'react';
import Link from 'next/link';

interface CodeMProps {
  code: string;
}

const CodeM: React.FC<CodeMProps> = ({ code }) => {
  return (
    <div className="w-full h-[80vh] mb-[2vh] flex-grow">
      <h1 className="text-3xl mb-[2vh]">Code</h1>
      <Link href={code} passHref>
        <a target="_blank" rel="noopener noreferrer" className="text-xl">
          {code}
        </a>
      </Link>
    </div>
  );
};

export default CodeM;
