
async function fetchProfileData() {
    const url = 'https://github.com/angelospaulo/js-developer-portfolio/blob/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
