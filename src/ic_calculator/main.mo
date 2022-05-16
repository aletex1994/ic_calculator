import Array "mo:base/Array";
import Nat "mo:base/Nat";
import Int "mo:base/Int";
import Buffer "mo:base/Buffer";
import List "mo:base/List";
import TrieMap "mo:base/TrieMap";
import Principal "mo:base/Principal";
import Iter "mo:base/Iter";

actor {
    
    stable var name : Text = "";
    stable var copyrights : Text = "Alessandro Tezza";
    let a : [Nat] = [1,2,3];
    let whitelist_buffer = Buffer.Buffer<Int>(1);
    var whitelist_trie = TrieMap.TrieMap<Principal, (Nat,Int)>(Principal.equal, Principal.hash);

    public query func getValueBack() : async Nat {
        return a[0];
    };
    // Get query for hello world
    public query func greetingsFromIc() : async Text {
        return "Hello from IC ";
    };
    public query func getCopyrights() : async Text{
        return copyrights;
    };
    public func setName(_name : Text) : async Text{
        name := _name;
        return name;
    };
    public query func getName() : async Text {
        return name;
    };
    public func addToBuffer(elem : Nat) : async Text{
        whitelist_buffer.add(elem);
        return "added";
    };
    public func removeLastBufferElem() : async ?Int{
        return whitelist_buffer.removeLast();
    };
    public func seeBufferSize() : async Nat{
        return whitelist_buffer.size();
    };
    public func bufferToArray() : async [Int]{
       return whitelist_buffer.toArray();      
    };

    public func addToTrieElem(_key : Principal, _value : (Nat,Int) ) : async Text {
        whitelist_trie.put(_key,_value);
        return "added";
    };
    public func sizeOfTrie() : async Nat {
       return  whitelist_trie.size();
    };

     public func getElemOfTrie(_key : Principal) : async ?(Nat,Int) {
       return whitelist_trie.get(_key);
    };
    public func iterWhitelist(): async Text{
         Iter.toArray(whitelist_trie.entries());
        
    };
   
};

//      dfx deploy ic_calculator