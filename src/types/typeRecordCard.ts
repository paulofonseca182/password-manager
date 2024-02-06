type RecordsCardProps = {
  record: {
    name: string;
    login: string;
    password: string;
    url: string;
  }
  removeRecord:(name:string) => void;
};

export default RecordsCardProps;
