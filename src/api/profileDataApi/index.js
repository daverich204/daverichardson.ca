import 'whatwg-fetch';
// import profileData from './profileData.json';

const exposedWordPressAboutPage = '/profile_data.json';
export const getProfileData = () => fetch(exposedWordPressAboutPage)
  .then(response => response.json())
  .then(aboutPageData => {
    return aboutPageData;
  });
