import styled from "styled-components";


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

export const Event = ({ name, photo, time, calories }) => {
  return (
    <Box>
      <Photo src={photo} alt={name} />
      <Title>{name}</Title>
      <SecoBox>
        <Info>{time} хв</Info>
        <Info>{calories} ккал</Info>
      </SecoBox>
    </Box>
  );
};



export default Event;
