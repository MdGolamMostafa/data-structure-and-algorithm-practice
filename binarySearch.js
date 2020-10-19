const friendsOld = [2,4,5,6,7,8,9,10,11,12,13];

function binarySearch (friendsOld,motaMamunOld) {
    let searchStartOld = 0;
    let searchEndOld = friendsOld.length - 1;
    while(searchStartOld <= searchEndOld){
        mid = Math.floor((searchStartOld+ searchStartOld)/2);

        if(friendsOld[mid] == motaMamunOld){
            console.log('motaMamun Old is ',motaMamunOld);
            return mid;
        }
        else if(friendsOld[mid] < motaMamunOld){
            searchStartOld = mid + 1;
        }
        else if (friendsOld[mid] > motaMamunOld){
            searchStartOld = mid - 1;
        }
    }
    return -1;
}
let motaMamunOld = 11;
const searchOld = binarySearch(friendsOld, motaMamunOld);

console.log(searchOld)