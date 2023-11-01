import UUID from 'uuid-js';

var storage = {};
const key = 'viid-storage-data';

storage.setData = items => {
    return new Promise((resolve, reject) => {
        try {
            var localStorageData = localStorage[key] || '[]';
            var temporary = JSON.parse(localStorageData);
            var uuid = UUID.create().toString();
            temporary.push({
                storageId: uuid,
                data: items
            });
            // storage缓存20条记录
            if (temporary.length > 20) {
                var shiftData = temporary.shift();
                // console.log('remove storage data: ' + shiftData);
            }
            localStorage.setItem(key, JSON.stringify(temporary));
            resolve(uuid);
        } catch(e) {
            reject(e);
        }
    });
};

/**
 * @param newData (Object)
 * @param storageId (String)
 * @param createNewJobId (Boolean)
 * @returns {Promise<any>}
 */
storage.updateData = (newData, storageId, createNewId) => {
    return new Promise((resolve, reject) => {
        try {
            var localStorageData = localStorage[key] || '[]';
            var temporary = JSON.parse(localStorageData);
            var newId = createNewId ? UUID.create().toString() : storageId;
            temporary.splice(temporary.findIndex(item => item.storageId === storageId), 1);
            temporary.push({
                storageId: newId,
                data: newData
            });
            localStorage.setItem(key, JSON.stringify(temporary));
            resolve(newId);
        } catch(e) {
            reject(e);
        }
    });
};

storage.getData = storageId => {
    return new Promise((resolve, reject) => {
        try {
            var localStorageData = localStorage[key] || '[]';
            var temporary = JSON.parse(localStorageData);
            if (temporary) {
                resolve({ data: temporary.find(item => item.storageId === storageId).data })
            }
        } catch(e) {
            reject(e);
        }
    });
};

export default storage;
