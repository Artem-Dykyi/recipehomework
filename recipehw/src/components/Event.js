import styled from "styled-components";

const DifficultyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const DifficultyItem = styled.div`
  padding: 5px 10px;
  border-radius: 10px;
  background: ${({ active }) => (active ? "#baff1a" : "#6a8824")};
`;


const Box = styled.div`
    padding: 10px;
    background:rgb(189, 214, 129);
    // background:#baff1a;
    // background:#6a8824;

    // border: rgb(180, 135, 52) solid 2px;
    width: 300px;
    text-align: center;
`;

const SecoBox = styled(Box)`
  display: flex;
  padding: 0;
  gap: 50px;
    background:rgb(233, 245, 206);
    border: rgb(180, 135, 52) solid 2px;
    border-radius: 40px;


`;

const Photo = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 40px;
`;

const Title = styled.h3`
  font-size: 20px;
`;

const Info = styled.p`
  font-size: 15px;
`;

// export const Event = ({ name, photo, time, calories }) => {
//   return (
//     <Box>
//       <Photo src={photo} alt={name} />
//       <Title>{name}</Title>
//       <SecoBox>
//         <Info>{time} хв</Info>
//         <Info>{calories} ккал</Info>
//       </SecoBox>
//     </Box>
//   );
// };

export const Event = ({ name, photo, time, calories, difficulty }) => {
  const difficultyLevels = ["Eazy", "Medium", "Hard"];

  return (
    <Box>
      <Photo src={photo} alt={name} />
      <Title>{name}</Title>
      <SecoBox>
        <Info>{time} хв</Info>
        <Info>{calories} ккал</Info>
      </SecoBox>

      <DifficultyWrapper>
        {difficultyLevels.map((label, i) => (
          <DifficultyItem key={i} active={i + 1 === difficulty}>
            {label}
          </DifficultyItem>
        ))}
      </DifficultyWrapper>
    </Box>
  );
};


export default Event;
