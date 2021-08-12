const transformMemberResponse = (members) => {
  return members.map((res) => ({
    login: res.login,
    avatarUrl: res.avatar_url,
    followers: res.followers,
    following: res.following,
  }));
};

module.exports = transformMemberResponse;
