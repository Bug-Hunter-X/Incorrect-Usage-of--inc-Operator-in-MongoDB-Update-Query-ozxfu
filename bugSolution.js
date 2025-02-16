```javascript
// Correct usage of $inc operator in MongoDB update query
db.collection('myCollection').updateOne({"_id": ObjectId("651e7a6f734d26a75827226c")}, {"$inc": {"field": 1}});
```