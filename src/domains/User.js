/**
 * Class for User. Represents and handles all the
 * attributes to handle the data of the users.
 */
class User {
  /**
   *vThe constructor of the class.
   * @constructor
   *
   * @param {Object} name
   * @param {Object} id
   * @param {Object} image_profile
   */
  constructor(name, id, image_profile) {
    this.name = name;
    this.id = id;
    this.image_profile = image_profile;
  }
}

export default User;
