import React, { useState } from 'react';

import PageLayout from '../layouts/PageLayout';
import PostsList from '../elements/PostsList';
import { BlogPageQuery } from '../../pages/__generated__/BlogPageQuery';
import PageHeader from '../shared/PageHeader';
import Row from '../shared/Row';
import Badge from '../shared/Badge';
import SEO from '../shared/SEO';
import Button from '../shared/Button';

type BlogScreenProps = {
  posts: BlogPageQuery;
};

const BlogScreen = (props: BlogScreenProps): React.ReactElement => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const { posts } = props;

  const postsNum = posts.allMdx.totalCount;

  // Extract unique tags
  const uniqueTags = Array.from(
    new Set(
      posts.allMdx.nodes.flatMap((node) => {
        return node.frontmatter?.tags ? node.frontmatter.tags : [];
      }),
    ),
  ).sort((a, b) => a.localeCompare(b));

  // Filter posts by the selected tag
  const filteredPosts = selectedTag
    ? {
      allMdx: {
        ...posts.allMdx,
        nodes: posts.allMdx.nodes.filter(
          (node) => node.frontmatter?.tags
              && node.frontmatter.tags.includes(selectedTag),
        ),
      },
    }
    : posts;

  return (
    <PageLayout>
      <SEO
        title="Research"
        description="Research projects, notes, and ongoing explorations"
      />
      <Row>
        <PageHeader>Research</PageHeader>
        <Badge className="ml-3 self-start">{postsNum}</Badge>
      </Row>
      {/* Tags Section */}
      <div className="flex justify-center gap-4 mb-6 text-center">
        <Button
          className={`text-sm ${!selectedTag ? 'font-bold' : 'font-normal'}`}
          kind={!selectedTag ? 'primary' : 'secondary'}
          onClick={():void => setSelectedTag(null)}
        >
          All Projects
        </Button>
        {uniqueTags.map((tag) => (
          <Button
            key={tag}
            className={`text-sm ${
              selectedTag === tag ? 'font-bold' : 'font-normal'
            }`}
            kind={selectedTag === tag ? 'primary' : 'secondary'}
            onClick={():void => setSelectedTag(tag)}
          >
            {tag}
          </Button>
        ))}
      </div>
      <PostsList posts={filteredPosts} />
    </PageLayout>
  );
};

export default BlogScreen;
