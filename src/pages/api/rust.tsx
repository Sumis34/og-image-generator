import ProfileTemplate from '@/components/templates/ProfileTemplate';
import { withOGImage } from 'next-api-og-image';
export interface QueryParams {
  name: string;
  steamid: string;
  avatar: string;
  local: string;
}

export default withOGImage<'query', QueryParams>({
  template: {
    react: ({ name, steamid, avatar, local }) => (
      <ProfileTemplate
        name={name}
        steamid={steamid}
        avatar={avatar}
        local={local}
      />
    ),
  },
  cacheControl: 'public, max-age=604800, immutable',
  quality: 50,
  dev: {
    inspectHtml: false,
  },
});
