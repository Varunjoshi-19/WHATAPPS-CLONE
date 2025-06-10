declare global {

namespace NodeJS {
     interface Global { 
          onlineUsers : Map<string , number>;
     }
}

}

export {};