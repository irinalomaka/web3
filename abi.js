var abiArray = [  
   {  
      "constant":true,
      "inputs":[  
         {  
            "name":"",
            "type":"uint256"
         }
      ],
      "name":"bookTitles",
      "outputs":[  
         {  
            "name":"",
            "type":"bytes16",
            "value":"0x"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {  
      "constant":false,
      "inputs":[  
         {  
            "name":"title",
            "type":"bytes16"
         },
         {  
            "name":"_author",
            "type":"bytes16"
         },
         {  
            "name":"_language",
            "type":"bytes16"
         }
      ],
      "name":"setBook",
      "outputs":[  

      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {  
      "constant":true,
      "inputs":[  

      ],
      "name":"getBooksCount",
      "outputs":[  
         {  
            "name":"",
            "type":"uint256",
            "value":"0"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   }
];