const page = {
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

const pageDetails = {
  name: 'pageDetail',
  title: 'Page Details',
  type: 'document',
  fields: [
    {
      name: 'page',
      title: 'What page is this detail linked to?',
      type: 'reference',
      to: {
        type: 'page',
      },
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

const buttonDescriptor = {
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

const experience = {
  name: 'experience',
  type: 'document',
  title: 'Experience',
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

export const SchemaTypes = [page, pageDetails, buttonDescriptor, experience]
