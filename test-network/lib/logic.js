/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
//  * aram {org.example.mynetwork.SampleTransaction} sampleTransaction
 * @transaction
 */
/*
async function sampleTransaction(tx) {
    // Save the old value of the asset.
    const oldValue = tx.asset.value;

    // Update the asset with the new value.
    tx.asset.value = tx.newValue;

    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.example.mynetwork.SampleAsset');
    // Update the asset in the asset registry.
    await assetRegistry.update(tx.asset);

    // Emit an event for the modified asset.
    let event = getFactory().newEvent('org.example.mynetwork', 'SampleEvent');
    event.asset = tx.asset;
    event.oldValue = oldValue;
    event.newValue = tx.newValue;
    emit(event);
}*/

/**
 * Track the trade of a commodity from one trader to another
 * //param {org.example.mynetwork.Access} access - the trade to be processed
 * @transaction
 */
/*async function changeAccessRights(access) {
    access.document.usersWithAccess = access.newUsersWithAccess;
    let assetRegistry = await getAssetRegistry('org.example.mynetwork.Document');
    await assetRegistry.update(access.document);
}*/


/**
 * Track the trade of a commodity from one trader to another
 * @param {org.example.mynetwork.AddUser} addUser - the trade to be processed
 * @transaction
 */

async function addUser(addUser) {
    let usersTable = addUser.document.UsersWithAccess;
    usersTable.push(addUser.userToAdd);
    let assetRegistry = await getAssetRegistry('org.example.mynetwork.Document');
    await assetRegistry.update(addUser.document);
}

/**
 * Track the trade of a commodity from one trader to another
 * @param {org.example.mynetwork.DeleteUser} deleteUser - the trade to be processed
 * @transaction
 */

async function deleteUser(deleteUser) {
    let usersTable = deleteUser.document.UsersWithAccess;
    usersTable.pop(deleteUser.userToAdd);
    let assetRegistry = await getAssetRegistry('org.example.mynetwork.Document');
    await assetRegistry.update(deleteUser.document);
}
//composer network update -a <business-network-archive> -c <card-name>