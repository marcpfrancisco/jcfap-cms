export type MemberImage = {
  url: string;
};

export interface Member {
  id: string;
  name: string;
  position: string;
  image: MemberImage;
  linkedIn?: string;
}

export interface MemberQueryResult {
  members: Member[];
  member: Member;
}
