// harvest.c 
#include <webassembly.h>
#include "cryptonight/hash.c"
 
export int crypotonight_hash(int a, int b) {
  return hash(a,b);
}

export int crypotonight_create(int a, int b) {
}

export int crypotonight_destory(int vars ) {

}
