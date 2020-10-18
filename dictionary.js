class Dictionary{
    constructor () {
        this.dictionary = {};
    }
    add(key, value) { // key = name or sign 
        this.dictionary[key] = value;
    }
    get(key) { // key = name or sign
        return this.dictionary[key];
    }
}

const nameAndMobile = new Dictionary();
        nameAndMobile.add('ashiq','015334543');
        nameAndMobile.add('siam','0000132324');
        nameAndMobile.add('saif','1111111');
        nameAndMobile.add('tanvir','44444444');

    console.log(nameAndMobile.dictionary);

    const kiptaAshiq = nameAndMobile.get('ashiq');
    console.log(kiptaAshiq)