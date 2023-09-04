class AutoIncrementSchema {

  constructor(database) {
    this.database = database;
    this.entity = "autoincrement";
    this.Collection = database.collection(this.entity);
  }

  async generateCollection() {
    try {
      await this.database.createCollection(this.entity);
    } catch (error) {
      throw error;
    }
  }

   async createData() {
    try {
      await this.Collection.insertOne({
        _id: "rolId",
        sequence_value: 0,
      });
    } catch (error) {
      throw error;
    }
  }

  async increment(entity) {
    const sequenceDocument = await this.Collection.findOneAndUpdate(
      { _id: `${entity}Id` },
      { $inc: { sequence_value: 1 } },
      { returnDocument: "after" }
    );

    return sequenceDocument.value.sequence_value;
  }
}
export default AutoIncrementSchema;
