
type MusicProps = {
    title: string;
    singer: string;
    imageUrl: string;
};

const Music:React.FC<MusicProps> = ({title, singer, imageUrl}) => {
  return (
    <div>
      <h1>Music</h1>
    </div>
  );
}