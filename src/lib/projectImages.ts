// Mapeamento estático dos arquivos de cada projeto em public/assets/projects/
const projectFiles: Record<string, string[]> = {
  afropunk: [
    '/assets/projects/afropunk/@_parecer.pauloIMG_1718.jpg',
    '/assets/projects/afropunk/@_parecer.pauloIMG_2338.jpg',
  ],
  coral: [
    '/assets/projects/coral/@_parecer.pauloIMG_0284.jpg',
    '/assets/projects/coral/@_parecer.pauloIMG_0297.jpg',
  ],
  desfile: [
    '/assets/projects/desfile/@_parecer.paulo@_parecer.paulo_MG_4364.jpg',
    '/assets/projects/desfile/@_parecer.paulo@_parecer.paulo_MG_4702.jpg',
  ],
  graduation: [
    '/assets/projects/graduation/@_parecer.paulo_MG_0062.jpg',
    '/assets/projects/graduation/@_parecer.paulo_MG_9883.jpg',
  ],
  palestras: [
    '/assets/projects/palestras/@_parecer.pauloIMG_4193.jpg',
    '/assets/projects/palestras/@_parecer.pauloIMG_4205.jpg',
  ],
  theater: [
    '/assets/projects/theater/@_parecer.paulo_MG_0242.jpg',
    '/assets/projects/theater/@_parecer.paulo_MG_1629.jpg',
  ],
};

export function getProjectImages(slug: string): string[] {
  // Try several candidate folder names: the slug itself and known aliases
  const aliases: Record<string, string> = {
    formaturas: 'graduation',
    teatro: 'theater',
    'desfile-natalino': 'desfile',
    'coral-natalino': 'coral',
  };

  const projectKey = aliases[slug] || slug;
  const images = projectFiles[projectKey] || [];

  // Debug logs
  if (typeof window !== 'undefined') {
    if (images.length === 0) {
      // eslint-disable-next-line no-console
      console.warn(`[getProjectImages] slug=${slug} matched 0 files. Available projects:`, Object.keys(projectFiles));
    } else {
      // eslint-disable-next-line no-console
      console.debug(`[getProjectImages] slug=${slug} matched ${images.length} files`);
    }
  }

  // Sort by filename (natural numeric order)
  return [...images].sort((a, b) => {
    const aName = a.split('/').pop() || '';
    const bName = b.split('/').pop() || '';
    return aName.localeCompare(bName, undefined, { numeric: true, sensitivity: 'base' });
  });
}

export default getProjectImages;
