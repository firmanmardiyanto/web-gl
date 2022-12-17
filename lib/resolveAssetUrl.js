const resolveAssetUrl = (asset, baseUrl = process.env.NEXT_PUBLIC_BASE_URL) => {
  if (asset.startsWith('http')) {
    return asset;
  }

  if (asset.startsWith('//')) {
    return `https:${asset}`;
  }

  if (asset.startsWith('/')) {
    return `${baseUrl}${asset}`;
  }

  return asset;
};

export default resolveAssetUrl;
