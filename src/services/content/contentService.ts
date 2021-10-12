import XMLParser from "react-xml-parser";

export class ContentService {
  baseUrl = "http://localhost:3000";

  generateHeaders() {
    const headers = new Headers();
    headers.append("Content-type", "application/json");

    return headers;
  }

  getPageInsightsResults = async () => {
    return await fetch(`${this.baseUrl}/api/page-insights`, {
      method: "GET",
    }).then((response) => {
      return response.json();
    });
  };

  generatePsiResult = async (data) => {
    return await fetch(`${this.baseUrl}/api/page-insights`, {
      method: "POST",
      headers: this.generateHeaders(),
      body: JSON.stringify(data),
    }).then((response) => {
      return response.json();
    });
  };

  getSites = async () => {
    return await fetch(`${this.baseUrl}/api/sites`, {
      method: "GET",
    }).then((response) => {
      return response.json();
    });
  };

  getSite = async (data: any) => {
    return await fetch(`${this.baseUrl}/api/site/${data}`, {
      method: "GET",
    }).then((response) => {
      return response.json();
    });
  };

  saveSite = async (data: any) => {
    return await fetch(`${this.baseUrl}/api/sites/create`, {
      method: "POST",
      headers: this.generateHeaders(),
      body: JSON.stringify(data),
    }).then((response) => {
      return response.json();
    });
  };

  xmlToJson = async (siteUrl) => {
    return await fetch(`https://iona.studio/sitemap.xml`, {
      method: "GET",
    }).then((response) => {
      // var xml = new XMLParser().parseFromString(response.text());
      return response.text();
    });
  };
}
