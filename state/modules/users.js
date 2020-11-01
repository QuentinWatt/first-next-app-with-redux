export const usersState = {
  usersList: [
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Kasper",
        last: "Andersen",
      },
      location: {
        street: {
          number: 6791,
          name: "Østergade",
        },
        city: "Sønder Stenderup",
        state: "Danmark",
        country: "Denmark",
        postcode: 66379,
        coordinates: {
          latitude: "-36.3816",
          longitude: "-172.1814",
        },
        timezone: {
          offset: "+3:30",
          description: "Tehran",
        },
      },
      email: "kasper.andersen@example.com",
      login: {
        uuid: "709afd1a-3b15-4cab-b707-14f59a3a8dda",
        username: "angryladybug189",
        password: "january",
        salt: "lSetVNT8",
        md5: "a19d33819a7bfa025e7b41318d3f1023",
        sha1: "92e707fea4db3722962979738edacc267aa0a6ed",
        sha256:
          "f1844d52624fb1b338971b7e3e9a6ee21b5bd49e3117c71dcbb8777d12673b2b",
      },
      dob: {
        date: "1959-11-07T17:13:24.558Z",
        age: 61,
      },
      registered: {
        date: "2018-09-30T10:25:04.703Z",
        age: 2,
      },
      phone: "56265886",
      cell: "95448640",
      id: {
        name: "CPR",
        value: "071159-1365",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/35.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/35.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/35.jpg",
      },
      nat: "DK",
    },
  ],
};

export const usersReducer = (state = usersState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
