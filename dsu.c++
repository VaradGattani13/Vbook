#include<iostream>
#include<algorithm>
#include<vector>
#include<stack>
#include<map>
#include<set>
#include<climits>
#include<math.h> 
#include<unordered_map>
#include<string>
using namespace std;


//  ###CREATING THE DSU 
class DisjointSet{ 
  
    public:
     vector<int>rank,parent,size;
     
        DisjointSet(int N){
            rank.resize(N+1,0);
            parent.resize(N+1);
            size.resize(N+1,0);
            for(int i=0;i<=N;i++){
                parent[i]=i;
                size[i]=1;

            }
            
        }
    int FindUltimateParent(int node){
        if(node==parent[node]) return node;

        // PATH COMPRESSION
        return parent[node]=FindUltimateParent(parent[node]);

    }
    void UnionByrank(int U,int V){
        int ultpU=FindUltimateParent(U);
        int ultpV=FindUltimateParent(V);
        if(ultpU==ultpV) return;


        // ATTACH SAMLLER RANK GUY TO LARGER RANK GUY AND CHANGE THERI RANK
        if(rank[ultpU]<rank[ultpV]){
            parent[ultpU]=ultpV;

        }
        else if(rank[ultpV]<rank[ultpU]){
            parent[ultpV]=ultpU;
            
        }
        else{
            parent[ultpV]=ultpU;
            rank[ultpU]++;
        }




    }
    void UnionBysize(int U,int V){
         int ultpU=FindUltimateParent(U);
        int ultpV=FindUltimateParent(V);
        if(ultpU==ultpV) return;


        // ATTACH SAMLLER RANK GUY TO LARGER RANK GUY AND CHANGE THERI RANK
        if(size[ultpU]<size[ultpV]){
            parent[ultpU]=ultpV;
            size[ultpV]+=size[ultpU];

        }
        else if(rank[ultpV]<=rank[ultpU]){
            // parent[ultpV]=ultpU;
            parent[ultpV]=ultpU;
            size[ultpU]+=size[ultpV];
            
        }
        // else{
        //     parent[ultpV]=ultpU;
        //     rank[ultpU]++;
        // }
    }


     
};
bool check(char c){
    if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u') return 1;
    return 0;
}
 

// *******जय जय बजरंग बली********
int main()
{
// fastio;
// DisjointSet ds(7);
// ds.UnionByrank(1,2);
// ds.UnionByrank(2,3);
// ds.UnionByrank(4,5);
// ds.UnionByrank(6,7);
// ds.UnionByrank(6,5);


// // Check if 3 and 7 are belongong to same componnt
// if(ds.FindUltimateParent(3)==ds.FindUltimateParent(7)) 
// cout<<"Same Component"<<endl;
// else cout<<"Not Same Component"<<endl;

// for(int i=1;i<=7;i++){
//     cout<<ds.parent[i]<<" ";
// }
// cout<<endl;


string s;cin>>s;
for(int i=0;i<s.length();i++){
    if(check(s[i])) continue;
    
    else{
        if(s[i]=='z'){
            s[i]='b';
        }
        else s[i]=s[i]+1;
    }
}
cout<<s<<endl;

// char x='a';
// x+=1;
// cout<<x;
// cout<<x+1-'a'<<endl;

// ds.UnionByrank(1,2);
// ds.UnionByrank(3,7);
// if(ds.FindUltimateParent(3)==ds.FindUltimateParent(7)) 
// cout<<"Same Component"<<endl;
// else cout<<"Not Same Component";

// return 0;
}
//Author:
//VG13
//andi mandi shandi jisne yeh code copy kia.....
//अंडेी  मंडी  शांडि जिसने कोड कॉपी किया वो 