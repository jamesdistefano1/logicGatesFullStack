When I say "comp", I am referring to the ReactJS object that is dragged around.
When I say "data", I am referring to the simple data object that is to be saved and loaded using JSON.


Overview of saving:
* List of gate comps is collapsed (remove empty elements and stuff)
* json.gates is created by mapping the list of gate comps; gateComps.map(g=>g.getData())
* Each gate comp is assigned an id equal to its index in the array; gateComps.forEach((g,i)=>g.setSaveIndex(i))
* List of wire comps is collapsed (remove empty elements and stuff)
* json.wires is created by mapping the list of wire comps; gateComps.map(g=>g.getData())
** The wire comp uses the index (that was just set) of the gate comp to create the wire data
* Each wire comp adds itself to its from and to

Overview of loading:
* List of gate comps is created by mapping json.gates
* List of wire comps is created by mapping json.wires
** The wire comp uses the wire data's .from and .to, along with the new list of gate comps, to connect to the gate comps

Layout of the JSON
* Top level (object)
** "gates" (array)
*** Gate (object)
**** "type" (string): type of gate; "IN", "OUT", "AND", "OR", "XOR", "NOT", "NAND", "NOR", "XNOR", others if we decide to
**** "inIndex" (string, only if type="IN")
**** "outIndex" (string, only if type="OUT")
**** "x" (number): horiontal position of the gate on the canvas
**** "y" (number): vertical position of the gate on the canvas
** "wires" (array)
*** Wire (object)
**** "from" (integer): index of gate that this wire connects from
**** "fromPort" (integer): which port on "from" this wire connects from
**** "to" (integer): index of gate that this wire connects to
**** "toPort" (integer): which port on "to" this wire connects to