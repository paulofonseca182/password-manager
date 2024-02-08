type RecordsCardProps = {
  record: {
    name: string;
    login: string;
    password: string;
    url: string;
  }
  removeRecord:(name:string) => void;
  hidePassword: boolean;
  hideAsteristics:boolean;
};

export default RecordsCardProps;
