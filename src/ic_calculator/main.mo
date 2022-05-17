import Array "mo:base/Array";
import Nat "mo:base/Nat";
import Int "mo:base/Int";

actor {
    
    stable var name : Text = "";
    stable var copyrights : Text = "Alessandro Tezza";
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
};

//      dfx deploy ic_calculator