const data=[
    {
        name: 'Belle',
        age: 18,
        gender: 'Female',
        lookingfor:'Dog',
        location:'Melbourne, Australia',
        image:'https://randomuser.me/api/portraits/women/57.jpg'
    },
    {
        name: 'Beau',
        age: 18,
        gender: 'Male',
        lookingfor:'Dog',
        location:'Canberra, Australia',
        image:'https://randomuser.me/api/portraits/men/57.jpg'
    },
    {
        name: 'Niya',
        age: 18,
        gender: 'Female',
        lookingfor:'Cat',
        location:'Raigarh, India',
        image:'https://randomuser.me/api/portraits/women/52.jpg'
    }
];

const profile = profileIterator(data);


// call first profile
nextProfile();


// Next Event
document.getElementById('next').addEventListener('click',nextProfile);

// Next Profile Display
function nextProfile(){
    // console.log(profile.next().value);
    const currentProfile = profile.next().value;

    if(currentProfile !== undefined){
        document.getElementById('imageDisplay').innerHTML=`
            <img src='${currentProfile.image}'>
        `;

        document.getElementById('profileDisplay').innerHTML=`
            <ul class="list-group">
                <li class="list-group-item">Name : ${currentProfile.name}</li>
                <li class="list-group-item">Age : ${currentProfile.age}</li>
                <li class="list-group-item">Location : ${currentProfile.location}</li>
                <li class="list-group-item">Looking for : ${currentProfile.lookingfor}</li>

            </ul>
        `;
    }else{
        // NO more profile
        window.location.reload();
    }
}

// PROFILE ITERATOR

function profileIterator(profiles){
    let nextIndex=0;

    return{
        next:function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++],done:false}:
            {done:true}
        }
    };
}





// By using Generator

// function* profileIterator(profiles){
//     let nextIndex=0;

//     while(nextIndex<profiles.length){
//         yield profiles[nextIndex++];
//     }
// }

