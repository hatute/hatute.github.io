# Define the folder name as a variable
TAG_FOLDER = "_taglist"

Jekyll::Hooks.register :posts, :post_write do |post|
    # Check if the tag folder exists, if not, create it
    Dir.mkdir(TAG_FOLDER) unless Dir.exist?(TAG_FOLDER)

    all_existing_tags = Dir.entries(TAG_FOLDER)
        .map { |t| t.match(/(.*).md/) }
        .compact.map { |m| m[1] }

    tags = post['tags'].reject { |t| t.empty? }
    tags.each do |tag|
        generate_tag_file(tag) unless all_existing_tags.include?(tag)
    end
end

def generate_tag_file(tag)
    # generate tag file
    File.open("#{TAG_FOLDER}/#{tag}.md", "wb") do |file|
        file << "---\nlayout: tag\ntag: #{tag}\n---\n"
    end
    # # generate feed file (uncomment if needed)
    # File.open("feeds/#{tag}.xml", "wb") do |file|
    #     file << "---\nlayout: feed\ntag-name: #{tag}\n---\n"
    # end
end
