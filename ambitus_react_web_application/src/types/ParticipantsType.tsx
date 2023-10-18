export interface ParticipantsType {
  name: String;
  level: number;
  image: String;
}

export type ParticipantProps = {
  participantsInfo: ParticipantsType[];
};
