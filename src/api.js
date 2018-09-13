export const loadFacebookRepos = async () => {
 try {
   const response = await fetch('https://api.github.com/users/facebook/repos');
   const data = await response.json();
   return data;
 } catch(e) {
   console.log('e', e);
 }
}

export const loadRepoDetails = async (repoName) => {
  try {
    const response = await fetch(`https://api.github.com/repos/facebook/${repoName}/contributors`);
    const data = await response.json();
    return data;
  } catch(e) {
    console.log('e', e);
  }
}
