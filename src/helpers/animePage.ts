import React from 'react'

export const animation = {
  anime: (e: any) => {

    var win;
    console.log()
    return (win = e.window.pageYOffset + (e.innerHeight * 3) / 4);
  },

  // animeRef: React.forwardRef<HTMLDivElement>((ref) => {

  //   return ref
   
     
  // }),
};
