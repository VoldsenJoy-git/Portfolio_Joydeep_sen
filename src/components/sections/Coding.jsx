import React from "react";
import styled from "styled-components";
import leetcode from "../../images/leetcode.png";
import codechef from "../../images/codechef.jpg";
import gfg from "../../images/gfg.avif";
import codeforces from "../../images/codeforces.jpg";
import codingNinjas from "../../images/Coding_ninjas.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 40px 20px; /* Added padding for spacing */
  background-color: ${({ theme }) => theme.background}; /* Background color for visibility */
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow wrapping for responsiveness */
  width: 100%;
  max-width: 1100px;
  justify-content: space-between; /* Distributes space */
`;

const Title = styled.h2`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  width: 100%; /* Ensure title spans full width */
  margin-bottom: 20px; /* Space below title */
`;

const ProfilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%; /* Take full width on small screens */
  max-width: 300px; /* Limit width for larger screens */
  
  @media (min-width: 768px) {
    width: 45%; /* Adjust width for larger screens */
  }
`;

const ProfileItem = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const ProfileImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;

const Coding = () => {
  const profiles = [
    {
      name: "LeetCode Main",
      url: "https://leetcode.com/__two-pointers__/",
      image: leetcode,
    },
    {
      name: "LeetCode Contest",
      url: "https://leetcode.com/two_pointers_2/",
      image: leetcode,
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/joydeep_2003",
      image: codechef,
    },
    {
      name: "Geeks for Geeks",
      url: "https://auth.geeksforgeeks.org/user/joydeep_2003",
      image: gfg,
    },
    {
      name: "Codeforces",
      url: "https://codeforces.com/profile/__two-pointers__",
      image: codeforces,
    },
    {
      name: "Coding Ninjas",
      url: "https://www.codingninjas.com/studio/profile/8acdb09f-bc45-4310-ab5f-ba266ac75dae",
      image: codingNinjas,
    },
  ];

  return (
    <Container id="Coding">
      <Wrapper>
        <Title>Coding Profiles</Title>
        <ProfilesContainer>
          {/* Left Side Profiles */}
          {profiles.slice(0, 3).map((profile, index) => (
            <ProfileItem key={index} href={profile.url} target="_blank" rel="noopener noreferrer">
              <ProfileImage src={profile.image} alt={profile.name} />
              {profile.name}
            </ProfileItem>
          ))}
        </ProfilesContainer>
        <ProfilesContainer>
          {/* Right Side Profiles */}
          {profiles.slice(3).map((profile, index) => (
            <ProfileItem key={index} href={profile.url} target="_blank" rel="noopener noreferrer">
              <ProfileImage src={profile.image} alt={profile.name} />
              {profile.name}
            </ProfileItem>
          ))}
        </ProfilesContainer>
      </Wrapper>
    </Container>
  );
};

export default Coding;
