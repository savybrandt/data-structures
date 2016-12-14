var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var newest;
 
  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++;
    newest = value;
  };

  someInstance.pop = function() {
    if ( size > 0 ) {
      size--;
    }
    return storage[size];
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
