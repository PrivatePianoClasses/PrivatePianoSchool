// Different environments use different variables
const projectId =
  import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID! ||
  import.meta.env.PUBLIC_SANITY_PROJECT_ID!;
const dataset =
  import.meta.env.PUBLIC_SANITY_STUDIO_DATASET! ||
  import.meta.env.PUBLIC_SANITY_DATASET!;

// Feel free to remove this check if you don't need it
if (!projectId || !dataset) {
  throw new Error(
    `Missing environment variable(s). Check if named correctly in .env file.\n\nShould be:\nPUBLIC_SANITY_STUDIO_PROJECT_ID=${projectId}\nPUBLIC_SANITY_STUDIO_DATASET=${dataset}\n\nAvailable environment variables:\n${JSON.stringify(
      import.meta.env,
      null,
      2
    )}`
  );
}

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schema";
import {HomeIcon} from '@sanity/icons';
import {CogIcon} from '@sanity/icons';
import {UsersIcon} from '@sanity/icons'
import {PlayIcon} from '@sanity/icons';
import {BellIcon} from '@sanity/icons';
import {EnvelopeIcon} from '@sanity/icons';
import {SearchIcon} from '@sanity/icons';

export default defineConfig({
  name: "private-piano-school",
  title: "Private Piano School",
  projectId,
  dataset,
  plugins: [structureTool({
    structure: (S) =>
      S.list()
        .title("Content")
        .items([
          S.listItem()
            .title("Home Page")
            .icon(HomeIcon)
            .child(
              S.document()
                .schemaType("home")
                .documentId("home")
            ),
          S.listItem()
            .title("Studio Procedures & Pricing")
            .icon(CogIcon)
            .child(
              S.document()
                .schemaType("studio")
                .documentId("studio")
            ),
          S.listItem()
            .title("Upcoming Performances")
            .icon(UsersIcon)
            .child(
              S.document()
                .schemaType("performances")
                .documentId("performances")
            ),
          S.listItem()
            .title("Video Gallery")
            .icon(PlayIcon)
            .child(
              S.document()
                .schemaType("videogallery")
                .documentId("videogallery")
            ),
          S.listItem()
            .title("Sacred Choir")
            .icon(BellIcon)
            .child(
              S.document()
                .schemaType("sacredchoir")
                .documentId("sacredchoir")
            ),
          S.listItem()
            .title("Contact Page")
            .icon(EnvelopeIcon)
            .child(
              S.document()
                .schemaType("contact")
                .documentId("contact")
            ),
          S.listItem()
            .title("SEO Settings")
            .icon(SearchIcon)
            .child(
              S.document()
                .schemaType("seo")
                .documentId("seo")
            ),
          ...S.documentTypeListItems().filter(
            (listItem) =>
              ![
                "home",
                "studio",
                "performances",
                "video",
                "videogallery",
                "videosection",
                "sacredchoir",
                "contact",
                "seo"
              ].includes(listItem.getId() ?? "default")
          ),
        ]),
  })],
  schema: {
    types: schemaTypes,
  },
});
