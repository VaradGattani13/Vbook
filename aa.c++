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
#define vii vector<int>
#define ll long long 
#define vl vector<ll>
#define MOD 1000000007
#define pii pair<int,int>
#define vpic vector<pair<int ,char>>
#define vpii vector<pair<int,int>>
#define fastio                   ios::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
#define pb push_back
#define popb pop_back
#define MOD 1000000007
#define forr(i,a,b) for(int i=a;i<b;i++)
#define forr1(i,a,b) for(int i=a;i<=b;i++)
#define endl '\n'
#define SAHI cout<<"YES"<<endl;
#define GALAT cout<<"NO"<<endl;
#define sahi cout<<"Yes"<<endl;
#define galat cout<<"No"<<endl;
int lowerBound(vector<int> arr, int n, int x) {int low=0,high=n-1;int ans=n;while(low<=high){int mid=(low+high)/2;if(arr[mid]>=x){ans=mid;high=mid-1;}else{low=mid+1;}}return ans;}
int upperBound(vector<int> arr, int n, int x) {int low=0,high=n-1;int ans=n;while(low<=high){int mid=(low+high)/2;if(arr[mid]>x){ans=mid;high=mid-1;}else{low=mid+1;}}return ans;}
ll power(ll x, ll y)
{ 
    ll res = 1;
     while (y > 0)
     { 
        if (y & 1) res = (ll)(res*x);
         y = y>>1;
         x = (ll)(x*x);
     } return res; 
}
ll gcd(ll a, ll b)
{
    if (b == 0)
        return a;
    else
        return gcd(b, a % b);
}
 

//Sieve of Erasthonesis
vector<bool> sieve(ll n) {
    vector<bool> is_prime(n + 1, true);
    is_prime[0] = is_prime[1] = false;
    for (ll i = 2; i * i <= n; i++) {
        if (is_prime[i]) {
            for (ll j = i * i; j <= n; j += i)
                is_prime[j] = false;
        }
    }
    return is_prime;
}
ll comuteXOR(ll n){if(n%4==0)return n; if(n%4==1)return 1; if(n%4==2)return n+1;return 0;}
 

//CREATING THE SEGMENT TREE
 //int N=1e9+2,segment[N],tree[4*N];
//void buildtree(int node,int start,int end){
    //if(start==end){
          //tree[node]=segment[start];
           //return;
        //}
//int middle=(start+end)/2;
//buildtree(2*node,start,middle);
//buildtree(2*node,middle+1,end);
//tree[node]=tree[2*node]+tree[2*node+1];
//}
 

//Kadane Algorithm
int Kadane_Algo(vii &a,int n){
    int maxi=INT_MIN;
    int s=0;
    forr(i,0,n){
        s+=a[i];
        maxi=max(maxi,s);
        if(s<0){
            s=0;

        }
    }
    return maxi;
}
 

//  ###CREATING THE DSU 
class DisjointSet{
    vector<int>rank,parent;
    public:
        DisjointSet(int N){
            rank.resize(N+1,0);
            parent.resize(N+1);
            for(int i=0;i<=N;i++){
                parent[i]=i;

            }
        }
    int FindUltimateParent(int node){
        if(node==parent[node]) return node;

        // PATH COmRESSION
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
    
};
 

// *******जय जय बजरंग बली********
int main()
{
fastio;
int  t;
cin>>t;
while(t--){
    ll n,k;cin>>n>>k;
    vl a(n);
    forr(i,0,n) cin>>a[i];
    // forr(i,0,n) cin>>v[i];
  sort(a.begin(),a.end());
  ll maxi=INT_MIN;
  forr(i,0,n){
    ll x=1;
    while(i+1<n && a[i+1]-a[i]<=k){
        x++;
        i++;
    }
    maxi=max(maxi,x);

  }
    if(maxi==INT_MIN) cout<<0<<endl;
    else cout<<n-maxi<<endl;
  
//   cout<<n-maxi<<endl;


}


return 0;
}
//Author:
//VG13
//andi mandi shandi jisne yeh code copy kia.....
//अंडेी  मंडी  शांडि जिसने कोड कॉपी किया वो 

