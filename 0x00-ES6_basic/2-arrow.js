export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];


  const self = this;
  this.addNeighbourhood = newNeighborhood => self.sanFranciscoNeighborhoods.push(newNeighborhood);

