#!/usr/bin/perl
#!perl

$displayTemplate= "../proposals/sessionTemplate.htm";
$wiki= "http://$ENV{SERVER_NAME}/scripts/wiki/";

#open OF, ">res.htm";

$path = $ENV{PATH_INFO};

if (!$path) {$path="/101-jrobertson.xml";}


if ($ENV{REQUEST_METHOD} eq GET){
$RawInput = $ENV{QUERY_STRING} || "";
} 
if ($ENV{REQUEST_METHOD} eq POST){
read(STDIN, $RawInput, $ENV{CONTENT_LENGTH});
} 

$RawInput =~ s/\+/ /g;
foreach $_ (split(/&/, $RawInput)) {
s/\%(..)/pack(C, hex($1))/ge;
s/$FieldSeparator//go;
($_, $CookedInput) = split (/=/, $_, 2);
$CookedInput{$_} = $CookedInput;
}

if ($CookedInput{show}) 
{$displayTemplate="../proposals/$CookedInput{show}";}

# --------------------------------------------------------


$proposals= "../proposals/submissions";

print "Content-type: text/html\n\n";
# print "$proposals $path  $displayTemplate\n";

if ($path) 
{
    readFile ($path); 
    getTag(); 
    getTime();
    getDiscussion();
    showFile();
}

# print " $field{tag} $field{seq} $field{fname} $field{TITLE}\n"; 

close LF;
# <>;
exit;



#--------------------------------------------

sub getDiscussion
{
    open DF, "<$proposals/discussions.txt";
    while (<DF>)
    {
	if (/^$field{seq}/)
	{
	    my ($sqq, $discuss)= split;
	    $field{DISCUSSION}= "$wiki?$discuss";
	    last;
	}
    }
    close DF;
}

#--------------------------------------------
sub getTag
{
    my $tags= "";
    open TAGF, "<$proposals/tagmap.txt";
    read TAGF, $tags, 10000;
    close TAGF;
    my %tags= split /\s+/, $tags;
    $field{tag}= $tags{$field{seq}};
}
#--------------------------------------------
sub getTime
{
    my $tags= "";
    open TAGF, "<$proposals/times.txt";
    while (<TAGF>)
    {
	if (/^$field{seq}=/)
	{
	    ($sqq, $time, $prvs, $next)= split /=/;
	    $field{time}= $time; 
	    $field{prvs}= $prvs;
	    $field{next}= $next;
	    last;
	}
    }
}
#--------------------------------------------

sub readFile()
{
    open IF, "<$proposals$path" || AbortScript ("can't open $path");
    # print "opened $proposals$path\n";
    $content= "";
    %field= ();
    $fname= $path;
    $fname =~ s{^/}{};
    $field{fname}= $fname;

    while (<IF>)
    {
	if (/<SESSION /) { ($field{seq})= /([0-9]+)/;  }
	else
	{ 
	    if (m{^[ \t]*<[^/]})  # opening?
	    { 
		my ($xtag, $xline)= /<([a-zA-Z_]+) *(.*)/;
		if ($xtag =~ /^br$/i
		    || $xtag =~ /^li$/i
		    || $xtag =~ /^ul$/i
		    || $xtag =~ /^pre$/i
		    || $xtag =~ /^table$/i
		    || $xtag =~ /^tr$/i
		    || $xtag =~ /^td$/i
		    || $xtag =~ /^p$/i)
		{$content .= $_; }
		else {
		    $tag= $xtag; 
		    $stag= $tag;
		    while (defined $field{$stag}) {$stag .= "1";}
		    ($content)= /<$tag[^>]*>(.*)/;
		    $xline =~ s{/?>.*}{};
		    $xline =~ s/<[^ ]*//;
		    while ($xline)
		    {
			my ($k, $v, $xr)= $xline =~ /([^=]+)="([^"]*)" *(.*)/;
                        my $afield= $stag.$k;
                        while (defined $field{$afield}) {$afield .= "1";}
                        if ($k) {$field{$afield}= $v;}
                        else {last;}
			$xline= $xr;
		    }
		}
	    }
	    else {$content .= $_; }
	    if ($tag && $content =~ m{</ *$tag})
	    { 
		$content =~ s{</ *$tag.*}{}; 
		# $content =~ s/[ \t\n]+/ /g;

                $content =~ s/([^\n]{40}[^ \n]*) /\1\n/g;
		$field{$stag}= $content;

		$content= "";
		$tag= "";
	    }
	}
    }
    close IF;
}

sub showFile()
{
#    for $k (sort keys %field)
#    {	print LF "$k  \t$field{$k}\n";    }

#    return;
    open TF, "<$displayTemplate";
    read TF, $tf, 100000;
    close TF;

    for $k (keys %field)
    {
	
	$tf =~ s/\$$k;/$field{$k}/g;
    }
    $tf =~ s/\$[A-Za-z_0-9]+;//g;
    $tf =~ s/\)\)/\255/g;
    $tf =~ s/\(\(::[^\255]*\255//g;
    $tf =~ s/\255//g;
    $tf =~ s/\(\([^:]*:://g;

    print $tf;
}



#########################################################
sub AbortScript {
local ($msg) = @_;
print <<EOF ;
<h3>Problem</h3>
$msg<p>
This information has been logged.<br>
We are sorry for any inconvenince.
EOF
die $msg;
}
