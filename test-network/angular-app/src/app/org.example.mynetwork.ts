import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.example.mynetwork{
   export class User extends Participant {
      UserId: string;
      firstName: string;
      lastName: string;
   }
   export class Document extends Asset {
      DocumentId: string;
      owner: User;
      description: string;
      UsersWithAccess: User[];
   }
   export class AddUser extends Transaction {
      document: Document;
      userToAdd: User;
   }
   export class DeleteUser extends Transaction {
      document: Document;
      userToDelete: User;
   }
// }
