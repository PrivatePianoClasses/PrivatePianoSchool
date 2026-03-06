import { sanityClient } from "sanity:client";
import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Reference } from "@sanity/types";
import groq from "groq";

export async function getHome(): Promise<Home> {
  return await sanityClient.fetch(
    groq`*[_type == "home"][0]`
  );
}

export interface Home {
  _type: "home";
  _createdAt: string;
  headerImage: ImageAsset;
  firstImage: ImageAsset;
  firsttitle: string;
  firsttext: string;
  abouttitle: string;
  column1: PortableTextBlock[];
  column2: PortableTextBlock[];
  ctatitle: string;
  ctaImage: ImageAsset;
}


export async function getStudio(): Promise<Studio> {
  return await sanityClient.fetch(
    groq`*[_type == "studio"][0]`
  );
}

export interface Studio {
  _type: "studio";
  _createdAt: string;
  headerImage: ImageAsset;
  introtext: string;
  pricing1: PortableTextBlock[];
  pricing2: PortableTextBlock[];
  pricing3: PortableTextBlock[];
  procedures: PortableTextBlock[];
}


export async function getPerformances(): Promise<Performances> {
  return await sanityClient.fetch(
    groq`*[_type == "performances"][0]`
  );
}

export interface Performances {
  _type: "performances";
  _createdAt: string;
  headerImage: ImageAsset;
  mainImage: ImageAsset;
  listings: object[];
}


export async function getVideos(): Promise<Videos> {
  return await sanityClient.fetch(
    groq`*[_type == "videogallery"][0] {..., pianoperfs[]->, choirperfs[]->, archiveperfs[]->}`
  );
}

export interface Videos {
  _type: "videogallery";
  _createdAt: string;
  headerImage: ImageAsset;
  videosections: object[];
  pianoperfs: Reference[];
  choirperfs: Reference[];
  archiveperfs: Reference[];
}


export async function getSacred(): Promise<Sacred> {
  return await sanityClient.fetch(
    groq`*[_type == "sacredchoir"][0]`
  );
}

export interface Sacred {
  _type: "sacredchoir";
  _createdAt: string;
  headerImage: ImageAsset;
  images: ImageAsset[];
  introtext: string;
  information: PortableTextBlock[];
  season: string;
  audition: string;
  times: string;
  statement: string;
  rehearsal: string;
  concert: string;
}


export async function getContact(): Promise<Contact> {
  return await sanityClient.fetch(
    groq`*[_type == "contact"][0]`
  );
}

export interface Contact {
  _type: "contact";
  _createdAt: string;
  headerImage: ImageAsset;
  portrait: ImageAsset;
  text: string;
}


export async function getSEO(): Promise<SEO> {
  return await sanityClient.fetch(
    groq`*[_type == "seo"][0]`
  );
}

export interface SEO {
  _type: "seo";
  _createdAt: string;
  ogimage: ImageAsset;
  title: string;
  description: string;
}