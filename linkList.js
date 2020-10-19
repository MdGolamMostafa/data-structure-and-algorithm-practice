
// example by  school manobbondon .

class Node { // let person is node.
    constructor (value) {
        this.value = value;
        this.nextPerson = null;//when initially next value not found
        this.previousPerson = null;
    }
}
class LinkList{
    constructor (headMaster){
        this.headMaster = headMaster;
    }
    add (value){
        let newNode = new Node(value);
        let currentPerson = this.headMaster; //first person of manobbondon
        while (currentPerson.nextPerson !=null){ // until null value
            currentPerson = currentPerson.nextPerson;
        }
        currentPerson.nextPerson = newNode;// new node = person 
    }

    remove(value) {
        let currentPerson = this.headMaster;
        let previousPerson = null;
        while(currentPerson != null){
            if (currentPerson.value === value) {
                previousPerson.nextPerson = currentPerson.nextPerson;
                break;
            }
            previousPerson = currentPerson;
            currentPerson = currentPerson.nextPerson;

        }
    }
}

const headMaster = new Node(10000000000);
const school = new LinkList(headMaster);
    school.add('kiptaAshiq');
    school.add('SiamAli');
    school.add('SohagMia');
    console.log(school);
    console.log(JSON.stringify(school));