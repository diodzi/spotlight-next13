import { type } from 'os'

type Schema = {
  name: string
  title: string
  type: string
  fields: Property[]
}

type Property = {
  name: string
  title: string
  type: string
  of?: {}[]
  to?: ReferenceTo[]
  options?: {
    list?: { value: string; title: string }[]
    source?: string
    slugify?: any
  }
}

type ReferenceTo = {
  type: string
}

const page: Schema = {
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of page',
      type: 'string',
    },
  ],
}

const subsection: Schema = {
  name: 'subsection',
  title: 'Subsections',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of subsection',
      type: 'string',
    },
  ],
}

const pageDetails: Schema = {
  name: 'pageDetail',
  title: 'Page Details',
  type: 'document',
  fields: [
    {
      name: 'page',
      title: 'What page is this detail linked to?',
      type: 'reference',
      to: [
        {
          type: 'page',
        },
      ],
    },
    {
      name: 'subsection',
      title: 'What subsection of the page is this detail linked to?',
      type: 'reference',
      to: [
        {
          type: 'subsection',
        },
      ],
    },
    {
      name: 'blurb',
      title: 'Blurb that goes under the heading',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}

const buttonDescriptor: Schema = {
  name: 'buttonDescriptor',
  title: 'Button Descriptors',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of button',
      type: 'string',
    },
    {
      name: 'page',
      title: 'Page that this button should live within',
      type: 'reference',
      to: [
        {
          type: 'page',
        },
      ],
    },
    {
      name: 'description',
      title: 'Description of button',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}

const experience: Schema = {
  name: 'experience',
  type: 'document',
  title: 'Experiences',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'position',
      type: 'string',
      title: 'Position',
    },
    {
      name: 'timeframe',
      type: 'string',
      title: 'Timeframe',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'startdate',
      type: 'date',
      title: 'Start Date (for order purposes in front-end)',
    },
  ],
}

const technology: Schema = {
  name: 'technology',
  type: 'document',
  title: 'Technologies',
  fields: [
    {
      name: 'name',
      title: 'Name of technology',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'typeOfTech',
      title: 'What type of technology is it?',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        list: [
          { title: 'Language', value: '1Language' },
          { title: 'Database', value: '4Database' },
          { title: 'UI Library', value: '3UI Library' },
          { title: 'Meta Framework', value: '2Meta Framework' },
          { title: 'Miscellaneous', value: '5Miscellaneous' },
        ],
      },
    },
    {
      name: 'platform',
      title: 'Platform the technology runs on',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        list: [
          { title: 'Web', value: 'web' },
          { title: 'Agnostic', value: 'agnostic' },
        ],
      },
    },
    {
      name: 'mainStack',
      title: 'Is it part of the main tech stack?',
      type: 'boolean',
    },
  ],
}

const project: Schema = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
    },
    {
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'technology' }],
        },
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}

const blogPost: Schema = {
  name: 'blogPost',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title of Blog post',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input: any) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'description',
      title: 'Brief description to be shown on main blog page',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
    },
    {
      name: 'content',
      title: 'Content of Blog post',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
  ],
}

const socialLink: Schema = {
  name: 'socialLink',
  title: 'Social Links',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of Social',
      type: 'string',
    },
    {
      name: 'href',
      title: 'Link',
      type: 'string',
    },
    {
      name: 'handle',
      title: 'username',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Logo',
      type: 'image',
    },
  ],
}

export const SchemaTypes = [
  page,
  subsection,
  pageDetails,
  buttonDescriptor,
  experience,
  technology,
  project,
  blogPost,
  socialLink,
]
