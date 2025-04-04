#include <iostream>
#include <string>
using namespace std;

int main() {
	// Complete the program
   int n;
   cin>>n;
   int count=1;
   for (int i=1;i<=n;i++){
    cout<<count<<" ";
    count++;
    for (int j=1;j<=i;j++){
        // cout<<count<<" ";
        // count++;
        cout<<<<" ";
    }
    cout<<endl;
   }
}
