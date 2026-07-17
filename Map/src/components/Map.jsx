// For array 
import React from 'react'

const Map = () => {
    const data = ["Google", "Microsoft", "Apple" , "Facebook"];
  return (
    <div>
       {data.map((element,index) => (
        //  data jo h vo ab element me aa rha h 
          <div key={index}> 
          {/* yha key dena jruri h otherwise error ayega console per  */}
            <h1>{element}</h1>
          </div>
       )
    )}
    </div>
  );
};
export default Map;



// For Objects 

import React from 'react'

const Map = () => {
    const smartPhones = [

        {
            id:1,
            model: "Iphone 15 pro max",
            price: 150000,
            img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTvKJKIEHYRrvGlKieHs0gjiAf4-vWdd2aUxRFgb2D8qIkrWw_8pjDUNablClR_NgCa4AtzGI5TUwyOE--YrsAMm-ubcZSzzHlPy7OC-9AX6fGF7rBJcf1_qA",
        },


        {
            id:2,
            model: "Iphone 15 pro max",
            price: 150000,
            img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTvKJKIEHYRrvGlKieHs0gjiAf4-vWdd2aUxRFgb2D8qIkrWw_8pjDUNablClR_NgCa4AtzGI5TUwyOE--YrsAMm-ubcZSzzHlPy7OC-9AX6fGF7rBJcf1_qA",
        },


        {
            id:3,
            model: "Iphone 15 pro max",
            price: 150000,
            img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTvKJKIEHYRrvGlKieHs0gjiAf4-vWdd2aUxRFgb2D8qIkrWw_8pjDUNablClR_NgCa4AtzGI5TUwyOE--YrsAMm-ubcZSzzHlPy7OC-9AX6fGF7rBJcf1_qA",
        }
    ]

    return (
     <>
      {smartPhones.map((data) => (
        <div key={data.id}>
            <img style={{width:"150px"}} src={data.img}/>
            <h3> {data.model} </h3>
        </div>
      )
    )}
     </>
    );
};
export default Map;
