export const mapEdgesToNodes = (data) =>
  data.edges ? data.edges.map((edge) => edge.node) : [];

export const filterOutDocsWithoutSlugs = ({
  slug,
}: {
  slug: { current: string };
}): string => (slug || {}).current;

export const getBlogUrl = (slug: { current: string }): string =>
  `/${slug.current || slug}/`;

export const buildImageObj = ({ asset: { _ref, _id }, crop, hotspot }) => ({
  asset: {
    _ref: _ref || _id,
  },
  crop,
  hotspot,
});
