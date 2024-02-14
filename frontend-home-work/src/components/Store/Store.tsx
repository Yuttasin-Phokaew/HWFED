// import { create } from 'zustand'
// import React, { useState  } from 'react';


// type Store = {
//   count: number
//   inc: () => void
// }



// const useStore = create<Store>()((set) => ({
//   count: 1,
//   inc: () => set((state) => ({ count: state.count + 1 })),
// }))

// function Store() {
//   const { count, inc } = useStore()
//   console.log(useStore)

//   const [image, setImage] = useState<string | null>(null);


//   return (
//     <div>
//       <span>{count}</span>
//       <button onClick={inc}>one up</button>
//     </div>
//   )
// }
// export default Store;

import React, { ChangeEvent, useState } from 'react';

export default function Home() {
  const [files, setFiles] = useState<FileList | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setFiles(files);
    console.log(setFiles)
  };

  // Function to check if a file is an image
  const isImage = (file: File) => file.type.startsWith('image');
  console.log(isImage)

  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Uploading and Displaying Media Files</h1>
      <input type="file" onChange={handleFileChange} multiple />
      <div className="flex flex-col items-center justify-center">
        {files &&
          Array.from(files).map((file, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                {isImage(file) && (
                  <img src={URL.createObjectURL(file)} width={500} height={500} alt="Uplaoded Media" />
                )}
    
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
