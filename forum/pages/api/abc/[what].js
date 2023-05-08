export default function handler(req, res) {
  console.log(req.query)
    return res.status(200).json("처리완료");
  //200 성공시,처리실패시500,유저잘못시400
  //status code
  
}
