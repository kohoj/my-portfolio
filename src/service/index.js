const getNotionData = async () => {
  const urlObj = {
    base: 'https://notion-api.splitbee.io/v1/table/',
    urls: {
      introUrl: '524a37b534254578a428391e50e0b671',
      uxUrl: 'bd90c7b1ec124ed2b12cc41d6611cf59',
      worksUrl: 'a7322cee584149beb434976cbdcbab51'
    }
  }

  try {
    const responses = await Promise.all(Object.values(urlObj.urls).map(url => fetch(urlObj.base + url)));
    const values = await Promise.all(responses.map(response => response.json()));
    console.log('结构:', values);
    return values;
  } catch (e) {
    console.log(e)
  } finally {
    console.log('got it!')
  }
}

export { getNotionData }